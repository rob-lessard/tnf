// import styles
import "./hero-banner.scss"

// import assets
import homeBannerImage from '../../assets/icons-remastered-online-lp-d.jpg';
import homeBannerImageMobile from '../../assets/icons-remastered-online-lp-m.jpg';

const HeroBanner = ({...banner}) => {
    return (
        <div className={`${banner.styleName}`}>
            <picture className={`${banner.styleName}-image`}>
                <source media="(max-width: 1023px)" srcSet={homeBannerImageMobile}/>
                <img src={homeBannerImage} alt="alt text" />
            </picture>

            <div className={`${banner.styleName}-content-container`}>
                <div className={`${banner.styleName}-content`}>
                    <h1 className={`${banner.styleName}-heading`}>{banner.heading}</h1>
                    <p>{banner.copy}</p>
                </div>
            </div>
        </div>
    )
}; export default HeroBanner;
