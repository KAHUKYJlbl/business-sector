import { Watch } from 'react-loader-spinner';
import classes from './loader-spinner.module.sass';

const spinnerTypes = {
  page: {
    height: '240',
    width: '240',
    color: '#000000',
    wrapperStyle: {
      height: '100vh',
    },
  },
  widget: {
    height: '240',
    width: '240',
    wrapperHeight: '100%',
    color: '#000000',
    wrapperStyle: {
      padding: '40px',
      height: '100%'
    },
  },
  button: {
    height: '15',
    width: '15',
    color: '#000000',
    wrapperStyle: {
      height: '100%'
    },
  }
};

type LoaderSpinnerProps = {
  spinnerType: keyof typeof spinnerTypes;
}

export function LoaderSpinner ({spinnerType}: LoaderSpinnerProps): JSX.Element {
  return (
    <Watch
      height={spinnerTypes[spinnerType].height}
      width={spinnerTypes[spinnerType].width}
      radius="48"
      color={spinnerTypes[spinnerType].color}
      ariaLabel="watch-loading"
      wrapperStyle={spinnerTypes[spinnerType].wrapperStyle}
      wrapperClass={classes.container}
      visible
    />
  );
}
