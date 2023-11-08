import './parallax.css';

const Parallax = () => {
  const divStyle = {
    color: '#777',
    backgroundColor: 'white',
    textAlign: 'center',
    padding: '50px 80px',
    textAlign: 'justify',
  };

  const borderStyle = {
    background: 'transparent',
    fontSize: '25px',
    color: '#f7f7f7',
  };

  const contentStyle = {
    color: '#ddd',
    backgroundColor: '#282E34',
    textAlign: 'center',
    padding: '50px 80px',
    textAlign: 'justify',
  };

  return (
    <div>
      <div style={divStyle} className="bgimg-1">
        <div className="caption">
          <span className="border">ELEGANT</span>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={contentStyle}>
          <p className="mx-auto flex justify-center">
            Find Elegancy in the Calmness
          </p>
        </div>
      </div>

      {/* <div style={divStyle}></div> */}

      <div className="bgimg-2">
        <div className="caption">
          <span className="border" style={borderStyle}>
            MOMENTS
          </span>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <div style={contentStyle}>
          <p className="mx-auto flex justify-center">
            Your Best Moments Can Be Captured
          </p>
        </div>
      </div>

      <div className="bgimg-3">
        <div className="caption">
          <span className="border" style={borderStyle}>
            DREAMS
          </span>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <div style={contentStyle}>
          <p className="mx-auto flex justify-center">Live Your Dreams</p>
        </div>
      </div>

      <div className="bgimg-4">
        <div className="caption">
          <span className="border" style={borderStyle}>
            PEACE
          </span>
        </div>
      </div>
    </div>
  );
};

export default Parallax;`adf`
