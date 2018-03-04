import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown';
import ArrowDropUpIcon from 'material-ui-icons/ArrowDropUp';
import ClearIcon from 'material-ui-icons/Clear';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import Option from './option';
import './AutoSearchSelect.css';

const suggestions = [
  { label: 'Bangalore' },
  { label: 'Chennai' },
  { label: 'Delhi' },
  { label: 'Mumbai' },
  { label: 'Pune' },
  { label: 'Ahmedabad' },
  { label: 'Hyderabad' },
  { label: 'Kolkata' },
  { label: 'Jaipur' },
  { label: 'Meerut' },
  { label: 'Srinagar' },
  { label: 'Amritsar' },
  { label: 'Chandigarh' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

function SelectWrapped(props) {
  const { ...other } = props;

  const noResultsText = () => <Typography>No results found</Typography>;

  const arrowRenderer = arrowProps =>
    (arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />);

  const clearRenderer = () => <ClearIcon />;

  return (
    <Select
      optionComponent={Option}
      noResultsText={noResultsText()}
      arrowRenderer={arrowRenderer}
      clearRenderer={clearRenderer}
      {...other}
    />
  );
}

class WDAutoSearchSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      single: null,
    };
  }

  handleChangeSingle = (single) => {
    this.setState({
      single,
    });
    this.props.callbackFromParent(single);
  };

  render() {
    const { single } = this.state;
    const inputProps = {
      value: single,
      onChange: this.handleChangeSingle,
      placeholder: 'Select City',
      instanceId: 'react-select-single',
      id: 'react-select-single',
      name: 'react-select-single',
      simpleValue: true,
      options: suggestions,
    };

    return (
      <div className="root">
        <Input className="width" inputComponent={SelectWrapped} inputProps={inputProps} />
      </div>
    );
  }
}

WDAutoSearchSelect.propTypes = {
  callbackFromParent: PropTypes.func.isRequired,
};

export default WDAutoSearchSelect;
