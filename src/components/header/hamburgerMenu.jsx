import React, { useState } from 'react';
import './hamburgerMenu.scss';
import cross from '../../assets/cross.svg';
import FacebookLogo from '../../assets/facebook-logo.png';
import InstagramLogo from '../../assets/instagram-logo.png';
import LinkedinLogo from '../../assets/linkedin-logo.png';

const HamburgerMenu = ({ closeHamburger }) => {
  const [showList, setShowList] = useState([]);

  const [navItems, setNavItems] = useState([
    {
      title: 'About us',
      link: '/about_us'
    },
    {
      title: 'Services',
      subItems: [
        {
          title: 'Car Rental',
          link: '/car_rental'
        },
        {
          title: 'Tour packages for domestic & international',
          link: '/tour_packages'
        }
      ]
    },
    {
      title: 'Gallery',
      subItems: [
        {
          title: 'Image Gallery',
          link: '/image_gallery'
        },
        {
          title: 'Video Gallery',
          link: '/video_gallery'
        }
      ]
    },
    {
      title: 'Our Packages',
      link: 'packages',
    },
    {
      title: 'Contact',
      link: 'contact',
    },
    {
      title: 'Pay Now',
      link: `paynow`,
    },
  ]);

  const socialMediaData = [
    {
      img: FacebookLogo,
      link: `https://www.facebook.com/Thestandardjourney`,
      altVal: 'facebook',
    },
    {
      img: InstagramLogo,
      link: 'https://www.instagram.com',
      altVal: 'instagram',
    },
    {
      img: LinkedinLogo,
      link: 'https://www.linkedin.com/in/the-standard-journey-a4377b1a7/',
      altVal: 'linkedin',
    },
  ];

  const handleShowList = (clickedIndex) => {
    if (clickedIndex === showList) {
      setShowList(null)
    } else {
      setShowList(clickedIndex)
    }
  }

  return (
    <>
      <div className="menu-container-res desktop">
        <div className="top-section">
          <section className="mlB close-button-container">
            <img src={cross} onClick={closeHamburger} alt="close" />
          </section>
          <ul className="item-list">
            {navItems.map((item, index) => {
              return item.subItems ?
                (
                  <>
                    <div
                      className="expandable-header"
                      onClick={() => handleShowList(index)}
                    >
                      <span>{item.title}</span>{' '}
                      {!(showList === index) ? (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="expand-plus"
                        >
                          <path
                            d="M0 7.99998H16M8.00002 16V0"
                            stroke="white"
                            stroke-width="2"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="16"
                          height="2"
                          viewBox="0 0 16 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="expand-plus"
                        >
                          <path
                            d="M0 0.999977H16M8.00002 1.5V0"
                            stroke="white"
                            stroke-width="2"
                          />
                        </svg>
                      )}

                    </div>
                    {showList === index && (
                      <ul className="item-list font-med">
                        {item.subItems.map((item, index) => {
                          return (
                            <li>
                              <a href={item.link}>{item.title}</a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </>
                )
                : (
                  <li>
                    <a
                      target={'_self'}
                      href={item.link}
                    >
                      {item.title}
                    </a>
                  </li>
                );
            })}

          </ul>
          <div className="division"></div>
        </div>

        <div className="bottom-section">
          <section className="social-media-links mdT mdB">
            <nav>
              <ul className="social-medias">
                {socialMediaData.map((item) => {
                  return (
                    <li className="inline-element cursor-pointer false">
                      <a target="_blank" href={item.link}>
                        <img src={item.img} alt={item.altVal} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </section>
          <div className="division" />
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;