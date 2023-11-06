import './Parallax.css'
const ParallaxEffect = () => {
    return (
        <div className="parallax-container">
            <div className="parallax">
                <img src="https://i.ibb.co/ynL25n3/kelsey-curtis-27u-Gzl-AFw-unsplash.jpg" alt="Parallax Image" />
            </div>
            <div className="content">
                <h1>Your Content Goes Here</h1>
                <p>More content...</p>
            </div>
            <div className="video-parallax">
                <video autoPlay loop muted>
                    <source src="c:\Users\Razib\Downloads\video (1080p) (1).mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default ParallaxEffect;
