
# Nullstack Phone Input

Simple input that converts user formatted input into a numerical string and the other way around.

## Install

```bash
npm install --save nullstack-phone-input
```

## Usage with one way binding

```jsx
import Nullstack from 'nullstack';
import PhoneInput from 'nullstack-phone-input';

class Application extends Nullstack {

  phone = '51999999999';

  updatePhone({value}) {
    this.phone = value;
  }

  render() {
    return (
      <PhoneInput name="phone" value={this.phone} onchange={this.updatePhone} />
    )
  }

}

export default Application;
```

## Usage with two way binding

```jsx
import Nullstack from 'nullstack';
import PhoneInput from 'nullstack-phone-input';

class Application extends Nullstack {

  phone = '51999999999';

  render() {
    return (
      <PhoneInput bind={this.phone} />
    )
  }

}

export default Application;
```

## Caveats

Currently this component only works with the XX 99999.9999 format

## License

Nullstack Phone Input is released under the [MIT License](https://opensource.org/licenses/MIT).