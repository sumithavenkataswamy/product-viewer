import Button from '../shared/button/Button';
import Input from '../shared/input/Input';
import './Contact.css';
import { useContactForm } from './Contact.Logic';

const Contact = () => {
  const {
    formData,
    errors,
    submitted,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      {submitted && (
        <p className="success-message">
          ✅ Your input has been recorded. We’ll get back to you soon!
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <Input
          value={formData.name}
          onChange={handleChange('name')}
          placeholder="Your name"
        />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <Input
          value={formData.email}
          onChange={handleChange('email')}
          placeholder="Your email"
          type="email"
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <Input
          value={formData.query}
          onChange={handleChange('query')}
          placeholder="Your query"
        />
        {errors.query && <p className="error-message">{errors.query}</p>}

        <Button label="Submit" type="submit" />
      </form>
    </div>
  );
};

export default Contact;
