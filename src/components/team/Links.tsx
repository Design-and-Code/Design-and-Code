import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useMemo } from 'react';

// Icon Urls
const linkedInLogo = '/static/social-icons/LinkedInIcon.svg';
const instagramLogo = '/static/social-icons/InstagramIcon.svg';
const twitterLogo = '/static/social-icons/TwitterIcon.svg';
const websiteLogo = '/static/social-icons/WebsiteIcon.svg';
const githubLogo = '/static/social-icons/GitHubIcon.svg';

interface ILinksProps {
  linkedIn: string;
  instagram: string;
  twitter: string;
  github: string;
  website: string;
}

interface ICustomImageProps {
  icon: string[];
}

const CustomImage = React.forwardRef(function CustomImage (props: ICustomImageProps, ref) {
  return (
    <Image
      width={30}
      className={'link'}
      height={30}
      src={props.icon[1]}
      alt={props.icon[0]}
    />
  )
})

const Links: React.FC<ILinksProps> = (props) => {
  const icons = useMemo(
    () => [
      [props.linkedIn, linkedInLogo],
      [props.instagram, instagramLogo],
      [props.twitter, twitterLogo],
      [props.github, githubLogo],
      [props.website, websiteLogo],
    ],
    [props]
  );

  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '1em 0' }}>
      {icons.map((icon) => {
        if (!icon[0]) return;
        return (
          <Link href={icon[0]} key={icon[0]} target="_blank" rel="noreferrer" passHref>
            <CustomImage icon={icon}/>
          </Link>
        );
      })}
    </div>
  );
};

export default Links;
