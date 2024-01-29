import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    };


const colors = [
  '#007bff',
  '#1988ff',
  '#3295ff',
  '#4ca2ff',
  '#66afff',
  '#7fbdff',
  '#99caff',
  '#b2d7ff',
  '#cce4ff',
 ];

  return (
    <div style={style}>
          <ColorRing
              gvisible={true}
    height="120"
    width="120"
    ariaLabel="color-ring-loading"
    wrapperStyle={{}}
    wrapperClass="color-ring-wrapper"
    colors={colors}
      />
    </div>
  );
};
