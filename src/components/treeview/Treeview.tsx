import React, { useState, useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Collapse,
  Typography,
  ListItemIcon,
  TextField,
  Chip,
  Box,
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';
import './treeview.css';
import type { TreeNode, TreeviewProps } from '../models/TreeNode';


const Treeview: React.FC<TreeviewProps> = ({ data = [] }) => {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [checked, setChecked] = useState<string[]>([]);
  const [search, setSearch] = useState<string>('');

  const findMatchingNodes = (nodes: TreeNode[], query: string, parents: string[] = []): string[] => {
    let matches: string[] = [];
    for (const node of nodes) {
      const currentPath = [...parents, node.id];
      const isMatch = node.label.toLowerCase().includes(query.toLowerCase());
      if (isMatch) matches = matches.concat(currentPath);
      if (node.children) matches = matches.concat(findMatchingNodes(node.children, query, currentPath));
    }
    return matches;
  };

  useEffect(() => {
    if (search.trim() === '') {
      setExpanded([]);
    } else {
      const matchedIds = findMatchingNodes(data, search);
      setExpanded(matchedIds);
    }
  }, [search, data]);

  const handleToggle = (id: string) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const findNodeById = (nodes: TreeNode[], id: string): TreeNode | undefined => {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const found = findNodeById(node.children, id);
        if (found) return found;
      }
    }
    return undefined;
  };

  const getAllDescendantIds = (node: TreeNode): string[] => {
    let ids: string[] = [];
    if (node.children) {
      for (const child of node.children) {
        ids.push(child.id);
        ids = ids.concat(getAllDescendantIds(child));
      }
    }
    return ids;
  };

  const handleCheck = (id: string) => {
    const node = findNodeById(data, id);
    if (!node) return;
    const descendantIds = getAllDescendantIds(node);

    setChecked((prev) => {
      const isChecked = prev.includes(id);
      if (isChecked) {
        return prev.filter((i) => i !== id && !descendantIds.includes(i));
      } else {
        return [...prev, id, ...descendantIds.filter(did => !prev.includes(did))];
      }
    });
  };

  const handleRemoveSelected = (id: string) => {
    const node = findNodeById(data, id);
    if (!node) return;
    const descendantIds = getAllDescendantIds(node);

    setChecked((prev) =>
      prev.filter((i) => i !== id && !descendantIds.includes(i))
    );
  };

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? <mark key={i}>{part}</mark> : part
    );
  };

  const selectedItems = checked
    .map(id => findNodeById(data, id))
    .filter(Boolean)
    .map(node => ({ id: node!.id, label: node!.label }));

  const renderTree = (nodes: TreeNode[], level = 0) => (
    <List component="div" disablePadding>
      {nodes.map((node) => {
        const hasChildren = node.children && node.children.length > 0;
        const isExpanded = expanded.includes(node.id);
        const isChecked = checked.includes(node.id);
        const isMatch = node.label.toLowerCase().includes(search.toLowerCase());

        return (
          <React.Fragment key={node.id}>
            <ListItem
              className="tree-list-item"
              style={{ paddingLeft: `${level * 20 + 8}px` }}
            >
              {hasChildren && (
                <ListItemIcon
                  className="tree-list-item-icon"
                  onClick={() => handleToggle(node.id)}
                >
                  {isExpanded ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
                </ListItemIcon>
              )}
              {!hasChildren && <div className="tree-indent" />}

              {level >= 3 && (
                <Checkbox
                  checked={isChecked}
                  onChange={() => handleCheck(node.id)}
                  size="small"
                  className="tree-checkbox"
                />
              )}

              <ListItemText
                primary={
                  <Typography fontSize={14}>
                    {isMatch ? highlightText(node.label, search) : node.label}
                  </Typography>
                }
              />
            </ListItem>

            {hasChildren && (
              <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                {renderTree(node.children!, level + 1)}
              </Collapse>
            )}
          </React.Fragment>
        );
      })}
    </List>
  );

  return (
    <div>
      <TextField
        size="small"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
        style={{ marginBottom: 16 }}
      />

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2">Selected Items:</Typography>
        {selectedItems.length > 0 ? (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
            {selectedItems.map((item) => (
              <Chip
                key={item.id}
                label={item.label}
                size="small"
                onDelete={() => handleRemoveSelected(item.id)}
              />
            ))}
          </Box>
        ) : (
          <Typography variant="body2" color="textSecondary">No items selected</Typography>
        )}
      </Box>

      <div className="tree-container">
        <div className="tree-header">
          <Typography variant="subtitle1">Select categories</Typography>
        </div>
        {renderTree(data)}
      </div>
    </div>
  );
};

export default React.memo(Treeview);
