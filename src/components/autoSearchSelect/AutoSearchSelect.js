import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown';
import CancelIcon from 'material-ui-icons/Cancel';
import ArrowDropUpIcon from 'material-ui-icons/ArrowDropUp';
import ClearIcon from 'material-ui-icons/Clear';
import Chip from 'material-ui/Chip';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import Option from './option';

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
  const { classes, ...other } = props;

  return (
    <Select
      optionComponent={Option}
      noResultsText={<Typography>No results found</Typography>}
      arrowRenderer={arrowProps =>
        (arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)
      }
      clearRenderer={() => <ClearIcon />}
      valueComponent={(valueProps) => {
        const { value, children, onRemove } = valueProps;

        const onDelete = (event) => {
          event.preventDefault();
          event.stopPropagation();
          onRemove(value);
        };

        if (onRemove) {
          return (
            <Chip
              tabIndex={-1}
              label={children}
              className={classes.chip}
              deleteIcon={<CancelIcon onTouchEnd={onDelete} />}
              onDelete={onDelete}
            />
          );
        }

        return <div className="Select-value">{children}</div>;
      }}
      {...other}
    />
  );
}

SelectWrapped.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ITEM_HEIGHT = 48;

const styles = theme => ({
  root: {
    flexGrow: 1,
    // height: 200,
    width: 200,
  },
  width: {
    width: '50%',
    float: 'right',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  '@global': {
    '.Select-control': {
      display: 'flex',
      alignItems: 'center',
      border: 0,
      height: 'auto',
      background: 'transparent',
      '&:hover': {
        boxShadow: 'none',
      },
    },
    '.Select-multi-value-wrapper': {
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap',
    },
    '.Select--multi .Select-input': {
      margin: 0,
    },
    '.Select.has-value.is-clearable.Select--single > .Select-control .Select-value': {
      padding: 0,
    },
    '.Select-noresults': {
      padding: theme.spacing.unit * 2,
    },
    '.Select-input': {
      display: 'inline-flex !important',
      padding: 0,
      height: 'auto',
    },
    '.Select-input input': {
      background: 'transparent',
      border: 0,
      padding: 0,
      cursor: 'default',
      display: 'inline-block',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      margin: 0,
      outline: 0,
    },
    '.Select-placeholder, .Select--single .Select-value': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(16),
      padding: 0,
      color: 'white',
    },
    '.Select-placeholder': {
      opacity: 0.42,
      color: theme.palette.common.black,
    },
    '.Select-menu-outer': {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[2],
      position: 'absolute',
      left: 0,
      top: `calc(100% + ${theme.spacing.unit}px)`,
      width: '100%',
      zIndex: 2,
      maxHeight: ITEM_HEIGHT * 4.5,
    },
    '.Select.is-focused:not(.is-open) > .Select-control': {
      boxShadow: 'none',
    },
    '.Select-menu': {
      maxHeight: ITEM_HEIGHT * 4.5,
      overflowY: 'auto',
    },
    '.Select-menu div': {
      boxSizing: 'content-box',
    },
    '.Select-arrow-zone, .Select-clear-zone': {
      color: theme.palette.action.active,
      cursor: 'pointer',
      height: 21,
      width: 21,
      zIndex: 1,
    },
    // Only for screen readers. We can't use display none.
    '.Select-aria-only': {
      position: 'absolute',
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      height: 1,
      width: 1,
      margin: -1,
    },
  },
});

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
    const { classes } = this.props;
    const { single } = this.state;

    return (
      <div className={classes.root}>
        <Input
          className={classes.width}
          inputComponent={SelectWrapped}
          inputProps={{
            classes,
            value: single,
            onChange: this.handleChangeSingle,
            placeholder: 'Select City',
            instanceId: 'react-select-single',
            id: 'react-select-single',
            name: 'react-select-single',
            simpleValue: true,
            options: suggestions,
          }}
        />
      </div>
    );
  }
}

WDAutoSearchSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  callbackFromParent: PropTypes.func.isRequired,
};

export default withStyles(styles)(WDAutoSearchSelect);
