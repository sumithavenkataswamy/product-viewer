export interface TreeNode {
    id: string;
    label: string;
    children?: TreeNode[];
  }

  export interface TreeviewProps {
    data: TreeNode[];
  }