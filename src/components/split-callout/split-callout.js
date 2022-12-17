// import styles
import "./split-callout.scss";

// import assets
import splitCalloutImage from '../../assets/icons-remastered-online-lp-rmst-nuptse-d.jpg';
import splitCalloutImageMobile from '../../assets/icons-remastered-online-lp-rmst-nuptse-m.jpg';

const SplitCallout = ({...callout}) => {
    return (
        <div className={`${callout.styleName}`}>
            <div className={`${callout.styleName}-container`}>
                <div className={`${callout.styleName}-content`}>
                    <p className={`${callout.styleName}-label`}>{callout.label}</p>
                    <h2 className={`${callout.styleName}-heading`}>{callout.heading}</h2>
                    <p>{callout.copy}</p>
                    <ul className={`${callout.styleName}-list`}>
                        <li className={`${callout.styleName}-list-item`}>
                            <a
                                href="https://www.thenorthface.com/en-us/shop-all/best-sellers-c829812/womens-osito-jacket-pNF0A7UQJ?color=6S1"
                                className={`${callout.styleName}-list-button`}
                                target="_blank">Shop Women's
                            </a>
                        </li>
                        <li className={`${callout.styleName}-list-item`}>
                            <a
                                href="https://www.thenorthface.com/en-us/mens/mens-fleece/mens-fleece-pullover-c829794/mens-gordon-lyons-hoodie-pNF0A5GMQ?color=KS7"
                                className={`${callout.styleName}-list-button`}
                                target="_blank">Shop Men's
                            </a>
                        </li>
                    </ul>
                </div>

                <picture className={`${callout.styleName}-image`}>
                    <source media="(max-width: 1023px)" srcSet={splitCalloutImageMobile}/>
                    <img src={splitCalloutImage} alt="alt text" />
                </picture>
            </div>
        </div>
    )
}; export default SplitCallout;
