
import Link from "next/link";
import { profile} from "@profile";
import { getMemberPath } from "@src/utils/helper";

export const Profile: React.FC = () => {
  return (
    
      <div className ="profile__container">

        <div className="profile__avatar">
          <img
            src={profile.avatarSrc}
            alt={profile.name.ja}
            className="profile__avatar-img"
          />
        </div>

        <div className="profile__content">
          <h1 className="profile__name">{profile.name.ja}</h1>
          <p className="profile__bio">{profile.bio}</p>
          <div className="profile__links">
            {profile.twitterUsername && (
              <a
                href={`https://twitter.com/${profile.twitterUsername}`}
                className="profile__link"
              >
                <img
                  src="/icons/twitter.svg"
                  alt={`Twitterのユーザー@${profile.twitterUsername}`}
                  width={22}
                  height={22}
                />
              </a>
            )}
            {profile.githubUsername && (
              <a
                href={`https://github.com/${profile.githubUsername}`}
                className="profile__link"
              >
                <img
                  src="/icons/github.svg"
                  alt={`GitHubのユーザー@${profile.githubUsername}`}
                  width={22}
                  height={22}
                />
              </a>
            )}
            {profile.suzuriUsername && (
              <a
              　href={`https://suzuri.jp/${profile.suzuriUsername}`}
                className="profile__link"
              >
                <img
                  src="/icons/suzuri.svg"
                  alt={`suzuriのユーザー@${profile.suzuriUsername}`}
                  width={22}
                  height={22}
                />
              </a>
            )}
            {profile.websiteUrl && (
              <a href={profile.websiteUrl} className="profile__link">
                <img
                  src="/icons/link.svg"
                  alt={`ウェブサイトのリンク`}
                  width={22}
                  height={22}
                />
              </a>
            )}
          </div>
        </div>

      </div>   
    
  );
};
