import { AnimatedPageWrapper } from "../animation/AnimatedPageWrapper";
import { AnimatedSection } from "../animation/AnimatedSection";
import { AnimatedList } from "../animation/AnimatedList";
import { FaExternalLinkAlt, FaInstagram, FaTiktok } from "react-icons/fa";

interface MediaItem {
  title: string;
  description: string;
  role: string;
  platform: string;
  tags: string[];
  imageUrl?: string;
  link?: string;
}

interface MediaSection {
  id: string;
  title: string;
  description: string;
  items: MediaItem[];
}

const MEDIA_SECTIONS: MediaSection[] = [
  {
    id: "gfuel",
    title: "G FUEL",
    description:
      "Social media, community engagement, and brand content as the G FUEL Social Media Community & Engagement Intern.",
    items: [
      {
        title: "Mixology Creator Challenge",
        description:
          "Planning and publishing social content that drives community engagement & brand awareness across G FUEL's platforms.",
        role: "G FUEL Social Media Community & Engagement Intern",
        platform: "G FUEL",
        tags: ["Community Challenge", "Influencer Marketing"],
        imageUrl: "./media/mixology.png",
        link: "https://www.instagram.com/p/DbGys3Lh1Os/",
      },
      {
        title: "Summer BOGO",
        description:
          "Editing and producing short-form content to promote sales & increase brand awareness.",
        role: "G FUEL Social Media Community & Engagement Intern",
        platform: "G FUEL",
        tags: ["Outreach", "Sale Promotion", "Brand Awareness"],
        imageUrl: "./media/summerbogo.png",
        link: "https://www.instagram.com/p/DbLnqm7E7Mw/",
      },
      {
        title: "GTA Trailer Drop",
        description:
          "Instagram viral moment built by hype & anticipation for the GTA trailer drop.",
        role: "G FUEL Social Media Community & Engagement Intern",
        platform: "G FUEL",
        tags: ["Viral", "Trending", "Game Drops"],
        imageUrl: "./media/gtaviral.png",
        link: "https://www.instagram.com/p/Dcoo4LMIF0M/?img_index=1",
      },
      {
        title: "PC Gamers",
        description:
          "GTA Console release & PC gaming community sentiment to digital copies.",
        role: "G FUEL Social Media Community & Engagement Intern",
        platform: "G FUEL",
        tags: ["Gaming Community", "Trending", "Relatable Content"],
        imageUrl: "./media/gtapc.png",
        link: "https://www.instagram.com/p/Dcjz53iBFIr/",
      },
      {
        title: "Meme & Marvel Content",
        description:
          "SpiderMan & Marvel rapid-turnaround content aligned with brand voice and gaming culture.",
        role: "G FUEL Social Media Community & Engagement Intern",
        platform: "G FUEL",
        tags: ["Trends", "Memes", "Gaming"],
        imageUrl: "./media/1v1.png",
        link: "https://www.instagram.com/p/Db4CUKZBR5u/",
      },
      {
        title: "Meme & Trend Content",
        description:
          "Quickly produced content aligned with brand voice and gaming culture.",
        role: "G FUEL Social Media Community & Engagement Intern",
        platform: "G FUEL",
        tags: ["Trends", "Memes", "Gaming"],
        imageUrl: "./media/sunshine.png",
        link: "https://www.instagram.com/p/DbtvPLyBAOr/",
      },
      {
        title: "Socials Impressions",
        description:
          "Engagement for G FUEL's brand awareness & organic growth.",
        role: "G FUEL Social Media Community & Engagement Intern",
        platform: "G FUEL",
        tags: ["Organic Growth", "Brand Awareness"],
        imageUrl: "./media/views.png",
        link: "https://www.instagram.com/gfuelenergy/",
      },
    ],
  },
  {
    id: "slug-gaming",
    title: "Slug Gaming",
    description:
      "PR, content strategy, and creative production for UC Santa Cruz's collegiate gaming community.",
    items: [
      {
        title: "Event & Club Content",
        description:
          "Managing and editing content that highlights Slug Gaming events, teams, and campus gaming culture.",
        role: "PR & Content Executive",
        platform: "Slug Gaming",
        tags: ["Content Strategy", "Esports"],
        imageUrl: "./media/hamiku.png",
        link: "https://www.instagram.com/p/DXkRKqfAWYD/",
      },
      {
        title: "Year Recap",
        description:
          "Post-year recap video covering Discord, highlights, and community moments.",
        role: "PR & Content Executive",
        platform: "Slug Gaming",
        tags: ["Team", "Recap"],
        imageUrl: "./media/thankyou2526.png",
        link: "https://www.instagram.com/p/DZTK5P6SG5i/",
      },
      {
        title: "CR6 LAN 2026",
        description:
          "Player prematch content for 2026 CR6 LAN in San Jose.",
        role: "PR & Content Executive",
        platform: "Slug Gaming",
        tags: ["Rainbow 6", "Talent Management", "Events"],
        imageUrl: "./media/guildhouse.png",
        link: "https://www.instagram.com/p/DaLg78zBbmm/",
      },
      {
        title: "Team Interviews",
        description:
          "R6 player interviews and behind-the-scenes content for the 2026 CR6 LAN.",
        role: "PR & Content Executive",
        platform: "Slug Gaming",
        tags: ["Talent Management", "Events"],
        imageUrl: "./media/cr6lan26.png",
        link: "https://www.instagram.com/p/DaOJHzihItQ/",
      },
      {
        title: "Community Thanks",
        description:
          "Team and community thank-you content for the 2025-26 academic year.",
        role: "PR & Content Executive",
        platform: "Slug Gaming",
        tags: ["Streams", "Highlights", "Reels"],
        imageUrl: "./media/springgiving26.png",
        link: "https://www.instagram.com/p/DXi23IvCZEk/",
      },
      {
        title: "Cornucopia 2026",
        description:
          "Visual recap to recruit new members and competitive players for the upcoming season.",
        role: "PR & Content Executive",
        platform: "Slug Gaming",
        tags: ["Recruitment", "PR", "Campaign"],
        imageUrl: "./media/cornucopia26.png",
        link: "https://www.instagram.com/p/DdpAyVbh6RX/",
      },
      {
        title: "Valorant Hype",
        description:
          "Valorant team hype posts to encourage community engagement and build excitement.",
        role: "PR & Content Executive",
        platform: "Slug Gaming",
        tags: ["Hype", "Match Day", "Esports"],
        imageUrl: "./media/editedcontent.png",
        link: "https://www.instagram.com/reel/DX7Xs5ZPFNV/",
      },
    ],
  },
  {
    id: "personal",
    title: "Personal Creator",
    description:
      "Life, esports, and cosmetics content across Instagram and TikTok.",
    items: [
      {
        title: "Gen.G Summer Camp 26",
        description:
          "Creating education and esports content with a focus on organic storytelling and audience connection.",
        role: "Content Creator",
        platform: "Instagram & TikTok",
        tags: ["Education", "Esports"],
        link: "https://drive.google.com/file/d/14LDMEvlbaL720ze7E4mlyxlYfra7fdoQ/view?usp=sharing",
        imageUrl: "./media/gengasu.png",
      },
      {
        title: "Content Strategy",
        description:
          "Constructing a cohesive content calendar and strategy for social media platforms with short-form videos.",
        role: "Media Strategist",
        platform: "Instagram & TikTok",
        tags: ["Esports", "Marketing"],
        imageUrl: "./media/contentstrategy.png",
        link: "https://canva.link/vg739pu5h7w3uj0",
      },
      {
        title: "Weekly Vlog",
        description:
          "Weekly vlog-style content covering esports camp, life, and outgoing moments.",
        role: "Content Creator",
        platform: "Instagram & TikTok",
        tags: ["Esports", "Food", "Studio Ghibli"],
        imageUrl: "./media/weekone.png",
        link: "https://www.instagram.com/ilyjenalee/reel/DcT0uooBxSy/",
      },
      {
        title: "Weekly Vlog",
        description:
          "Short-form vlog content covering lifestyle, campus, and esports moments.",
        role: "Content Creator",
        platform: "Instagram & TikTok",
        tags: ["Kpop", "Lifestyle", "VCT"],
        imageUrl: "./media/weektwo.png",
        link: "https://www.instagram.com/ilyjenalee/reel/Dczew5wTEus/",
      },
      {
        title: "TikTok Shop",
        description:
          "$30,000 GMV in 3 months through TikTok Shop, with a focus on content creation and social media marketing.",
        role: "Content Creator",
        platform: "Instagram & TikTok",
        tags: ["Collaboration", "Fashion", "Trends"],
        imageUrl: "./media/toothless.png",
        link: "https://www.tiktok.com/@ilyjenalee/video/7559738644521684255",
      },
      {
        title: "Cosmetic Aesthetics",
        description:
          "Roundup of makeup looks throughout the year, highlighting favorite products and trends.",
        role: "Content Creator",
        platform: "Instagram & TikTok",
        tags: ["Makeup", "Favorites", "Pinterest"],
        imageUrl: "./media/cosmetics.png",
        link: "https://www.tiktok.com/@ilyjenalee/photo/7495091777385303338",
      },
      {
        title: "Kpop Demon Hunters",
        description:
          "KDH integration to align with Kpop aesthetics and trends, with a focus on cosplay and makeup.",
        role: "Content Creator",
        platform: "Instagram & TikTok",
        tags: ["Trends", "Cosmetics", "Cosplay"],
        imageUrl: "./media/kdhjinu.png",
        link: "https://www.tiktok.com/@ilyjenalee/video/7520093912422255903",
      },
    ],
  },
];

export function Media() {
  return (
    <AnimatedPageWrapper>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <AnimatedSection delay={0} fromTransform="translateY(20px)" className="mb-10">
          <h1 className="text-foreground mb-2">Media & Content</h1>
          <p className="text-muted-foreground max-w-3xl">
            Social media, community engagement, and content creation across brand,
            collegiate, and personal channels.
          </p>
        </AnimatedSection>

        <div className="flex flex-col gap-12">
          {MEDIA_SECTIONS.map((section, sectionIndex) => (
            <AnimatedSection
              key={section.id}
              id={section.id}
              delay={80 + sectionIndex * 80}
              fromTransform="translateY(24px)"
            >
              <div className="mb-6">
                <h2 className="text-primary mb-2">{section.title}</h2>
                <p className="text-muted-foreground">{section.description}</p>
              </div>

              <AnimatedList
                items={section.items}
                renderItem={(item, index) => (
                  <article
                    key={`${section.id}-${index}`}
                    className="media-deck-card glass-panel"
                    style={{ zIndex: section.items.length - index }}
                  >
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="media-deck-card-preview media-deck-card-preview--link"
                        aria-label={`Watch ${item.title}`}
                      >
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt=""
                            className="media-deck-card-image"
                          />
                        ) : (
                          <div className="media-deck-card-placeholder">
                            {item.platform.includes("Instagram") && (
                              <FaInstagram aria-hidden="true" />
                            )}
                            {item.platform.includes("TikTok") && (
                              <FaTiktok aria-hidden="true" />
                            )}
                            <span>{item.platform}</span>
                          </div>
                        )}
                      </a>
                    ) : (
                      <div className="media-deck-card-preview">
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="media-deck-card-image"
                          />
                        ) : (
                          <div className="media-deck-card-placeholder">
                            {item.platform.includes("Instagram") && (
                              <FaInstagram aria-hidden="true" />
                            )}
                            {item.platform.includes("TikTok") && (
                              <FaTiktok aria-hidden="true" />
                            )}
                            <span>{item.platform}</span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="media-deck-card-body">
                      <div className="media-deck-card-header">
                        <div>
                          <h3 className="media-deck-card-title">{item.title}</h3>
                          <p className="media-deck-card-role">{item.role}</p>
                        </div>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="media-deck-card-link"
                            aria-label={`Open ${item.title}`}
                          >
                            <FaExternalLinkAlt aria-hidden="true" />
                          </a>
                        )}
                      </div>

                      <p className="media-deck-card-description">{item.description}</p>

                      <div className="media-deck-card-tags">
                        {item.tags.map((tag: string) => (
                          <span key={tag} className="media-deck-card-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                )}
                fromTransform="translateY(20px)"
                staggerDelay={60}
                className="media-deck"
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedPageWrapper>
  );
}
