import Nullstack from 'nullstack';

class PhoneInput extends Nullstack {
  
  parse({event, onchange}) {
    const value = event.target.value.replace(/\D/g, '');
    onchange({value});
  }

  render({value, class: klass}) {
    let formatted = value || '';
    formatted = formatted.replace(/\D/g, '');
    formatted = formatted.replace(/^(\d{2})(\d)/g, '($1) $2');
    formatted = formatted.replace(/(\d)(\d{4})$/, '$1-$2');
    return (
      <input 
        type="tel"
        maxlength="15"
        value={formatted}
        oninput={this.parse}
        default={true}
        class={klass}
        placeholder="(XX) 99999.9999"
      />
    )
  }

}

export default PhoneInput;