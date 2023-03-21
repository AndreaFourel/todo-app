import style from './Field.module.css';
import { useId, useEffect } from 'react';
import useFieldError from '../../../Hooks/useFieldError';

const TextareaField = ({ label, name, placeholder, validation, value, onChange, onError }) => {

  const id = useId();

  const { error, validateField } = useFieldError();

  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value);
  }

  // gestion des erreurs
  useEffect(() => {
    validateField(value, validation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ value ]);

  
  useEffect(() => {
    onError({ name, error });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ error, name ]);

  return (
    <div className={ style['input-group'] }>
      <label htmlFor={ id }>{ label }</label>
      <textarea 
        type="text" 
        rows={5}        
        name={name} 
        className={ style.input } 
        placeholder={ placeholder } 
        value={ value }
        onChange={ handleChange } />
        {error && <p className={ style.error }>{ error }</p>}
    </div>
  );
};

export default TextareaField;