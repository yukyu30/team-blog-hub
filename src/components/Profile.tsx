import Link from "next/link";
import { profile} from "@profile";
import { getMemberPath } from "@src/utils/helper";

export const ScrollableMembers: React.FC = () => {
  return (
    <div>
  
            <div className="member-header__avatar">
              <img
                src={profile.avatarSrc}
                alt={profile.name.ja}
                width={100}
                height={100}
                className="member-header__avatar-img"
              />
            </div>
            <h1 className="member-header__name">{profile.name.ja}</h1>
            <p className="member-header__bio">{profile.bio}</p>
            <div className="member-header__links">
              {twitterUsername && (
                <a
                  href={`https://twitter.com/${profile.twitterUsername}`}
                  className="member-header__link"
                >
                  <img
                    src="/icons/twitter.svg"
                    alt={`Twitterのユーザー@${profile.twitterUsername}`}
                    width={22}
                    height={22}
                  />
                </a>
              )}
              {githubUsername && (
                <a
                  href={`https://github.com/${profile.githubUsername}`}
                  className="member-header__link"
                >
                  <img
                    src="/icons/github.svg"
                    alt={`GitHubのユーザー@${profile.githubUsername}`}
                    width={22}
                    height={22}
                  />
                </a>
              )}
              {suzuriUsername && (
                <a
                  href={`https://suzuri.jp/${profile.suzuriUsername}`}
                  className="member-header__link"
                >
                  <img
                    src="/icons/suzuri.svg"
                    alt={`suzuriのユーザー@${profile.suzuriUsername}`}
                    width={22}
                    height={22}
                  />
                </a>
              )}
              {websiteUrl && (
                <a href={profile.websiteUrl} className="member-header__link">
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
    
  );
};
