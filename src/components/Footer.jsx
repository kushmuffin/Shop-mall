import instagramIcon from '../assets/icon/icon_instagram.png';
import facebookIcon from '../assets/icon/icon_facebook.png';
import twitterIcon from '../assets/icon/icon_twitter.png';
import githubIcon from '../assets/icon/icon_github.png';

export default function Footer(){
  return(
    <footer>
      <div className='icon'>
        <a href="https://www.facebook.com/">
          <img src={instagramIcon} alt="" />
        </a>
        <a href="https://www.facebook.com">
          <img src={facebookIcon} alt="" />
        </a>
        <a href="https://www.twitter.com">
          <img src={twitterIcon} alt="" />
        </a>
        <a href="https://github.com/kushmuffin">
          <img src={githubIcon} alt="" />
        </a>
      </div>
      <p>Copyright © 2024 gentlemen spurs. All Rights Reserved.</p>
      {/* <p>https://www.vice.com/en/article/5d9gzk/succession-fashion-clothing-style</p> */}
    </footer>
  )
}