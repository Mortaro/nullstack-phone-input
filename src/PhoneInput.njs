import Nullstack from 'nullstack';

class PhoneInput extends Nullstack {
  
  parse({event, onchange}) {
    const value = event.target.value.replace(/\D/g, '');
    onchange({value});
  }

  mask({value}) {
    return (value || '')
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2');
  }

  dataset(context) {
    return Object.keys(context).filter((key) => {
      return key.startsWith('data');
    }).reduce((accumulator, key) => {
      accumulator[key] = context[key];
      return accumulator;
    }, {});
  }

  render({name, placeholder, class: klass, id, disabled}) {
    return (
      <input 
        type="tel"
        maxlength="15"
        name={name}
        value={this.mask()}
        oninput={this.parse}
        class={klass}
        placeholder={placeholder}
        id={id}
        disabled={disabled}
        {...this.dataset()}
      />
    )
  }

}

export default PhoneInput;