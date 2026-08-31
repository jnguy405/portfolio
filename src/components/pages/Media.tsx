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
        title: "Community Campaigns",
        description:
          "Planning and publishing social content that drives community engagement across G FUEL's platforms.",
        role: "G FUEL Social Media Community & Engagement Intern",
        platform: "G FUEL",
        tags: ["Community Management", "Content Strategy", "Brand Marketing"],
        imageUrl: "./carousel/image1.png",
      },
      {
        title: "Short-Form Video",
        description:
          "Editing and producing short-form video content tailored for social distribution and audience growth.",
        role: "Content Creator",
        platform: "G FUEL",
        tags: ["Video Editing", "Short-Form", "Social Media"],
        imageUrl: "./carousel/image2.png",
      },
      {
        title: "Product Launch Reel",
        description:
          "Highlight reel for a new flavor drop — scripting, editing, and publishing across Instagram and TikTok.",
        role: "G FUEL Social Media Community & Engagement Intern",
        platform: "G FUEL",
        tags: ["Reels", "TikTok", "Launch"],
        imageUrl: "./carousel/image3.png",
      },
      {
        title: "Community Q&A",
        description:
          "Live community engagement series answering fan questions and spotlighting creator submissions.",
        role: "G FUEL Social Media Community & Engagement Intern",
        platform: "G FUEL",
        tags: ["Community", "Engagement", "UGC"],
        imageUrl: "./carousel/image4.png",
      },
      {
        title: "Meme & Trend Content",
        description:
          "Rapid-turnaround trend content aligned with brand voice and gaming culture.",
        role: "Content Creator",
        platform: "G FUEL",
        tags: ["Trends", "Memes", "Gaming"],
        imageUrl: "./carousel/image5.png",
      },
      {
        title: "Influencer Collab",
        description:
          "Coordinated content with creators for cross-promotional campaigns and product features.",
        role: "G FUEL Social Media Community & Engagement Intern",
        platform: "G FUEL",
        tags: ["Collab", "Creators", "Campaign"],
        imageUrl: "./carousel/image6.png",
      },
      {
        title: "Giveaway Promo",
        description:
          "Designed and promoted fan giveaways to boost engagement and grow the community.",
        role: "G FUEL Social Media Community & Engagement Intern",
        platform: "G FUEL",
        tags: ["Giveaway", "Promo", "Engagement"],
        imageUrl: "./carousel/image7.png",
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
        tags: ["PR", "Content Strategy", "Esports"],
        imageUrl: "./carousel/image6.png",
      },
      {
        title: "Tournament Recap",
        description:
          "Post-event recap video covering brackets, highlights, and player interviews from campus LANs.",
        role: "PR & Content Executive",
        platform: "Slug Gaming",
        tags: ["Esports", "Recap", "Video"],
        imageUrl: "./carousel/image7.png",
      },
      {
        title: "Team Spotlight",
        description:
          "Player profile series showcasing competitive teams and their journey through the collegiate scene.",
        role: "PR & Content Executive",
        platform: "Slug Gaming",
        tags: ["Spotlight", "Teams", "Storytelling"],
        imageUrl: "./carousel/image8.png",
      },
      {
        title: "Club Announcements",
        description:
          "Weekly announcement graphics and copy for meetings, tryouts, and campus gaming events.",
        role: "PR & Content Executive",
        platform: "Slug Gaming",
        tags: ["PR", "Graphics", "Events"],
        imageUrl: "./carousel/image9.png",
      },
      {
        title: "Stream Highlights",
        description:
          "Short clips from livestreams and watch parties edited for Instagram Reels and TikTok.",
        role: "PR & Content Executive",
        platform: "Slug Gaming",
        tags: ["Streams", "Highlights", "Reels"],
        imageUrl: "./carousel/image10.png",
      },
      {
        title: "Recruitment Campaign",
        description:
          "Visual campaign to recruit new members and competitive players for the upcoming season.",
        role: "PR & Content Executive",
        platform: "Slug Gaming",
        tags: ["Recruitment", "PR", "Campaign"],
        imageUrl: "./carousel/image1.png",
      },
      {
        title: "Match Day Hype",
        description:
          "Pre-match hype posts and countdown content for competitive sets and campus showdowns.",
        role: "PR & Content Executive",
        platform: "Slug Gaming",
        tags: ["Hype", "Match Day", "Esports"],
        imageUrl: "./carousel/image2.png",
      },
    ],
  },
  {
    id: "personal",
    title: "Personal Creator",
    description:
      "Life, skincare, and cosmetics content across Instagram and TikTok.",
    items: [
      {
        title: "Life, Skincare, & Cosmetics",
        description:
          "Creating lifestyle and beauty content with a focus on authentic storytelling and audience connection.",
        role: "Content Creator",
        platform: "Instagram & TikTok",
        tags: ["Lifestyle", "Beauty", "Short-Form"],
        link: "https://www.instagram.com/",
        imageUrl: "./carousel/image10.png",
      },
      {
        title: "Morning Routine GRWM",
        description:
          "Get-ready-with-me format blending skincare steps, product favorites, and casual life updates.",
        role: "Content Creator",
        platform: "Instagram & TikTok",
        tags: ["GRWM", "Skincare", "Routine"],
        imageUrl: "./carousel/image1.png",
      },
      {
        title: "Product Review",
        description:
          "Honest first-impression reviews of trending beauty and skincare products.",
        role: "Content Creator",
        platform: "Instagram & TikTok",
        tags: ["Review", "Beauty", "TikTok"],
        imageUrl: "./carousel/image2.png",
      },
      {
        title: "Day in My Life",
        description:
          "Vlog-style content covering campus life, coffee runs, and behind-the-scenes creator moments.",
        role: "Content Creator",
        platform: "Instagram & TikTok",
        tags: ["Vlog", "Lifestyle", "Campus"],
        imageUrl: "./carousel/image3.png",
      },
      {
        title: "Cosmetics Tutorial",
        description:
          "Step-by-step makeup looks with product breakdowns and tips for everyday wear.",
        role: "Content Creator",
        platform: "Instagram & TikTok",
        tags: ["Makeup", "Tutorial", "Cosmetics"],
        imageUrl: "./carousel/image4.png",
      },
      {
        title: "Skincare Favorites",
        description:
          "Monthly roundup of skincare products that worked — honest takes and application tips.",
        role: "Content Creator",
        platform: "Instagram & TikTok",
        tags: ["Skincare", "Favorites", "Review"],
        imageUrl: "./carousel/image5.png",
      },
      {
        title: "OOTD & Style",
        description:
          "Outfit-of-the-day content mixing campus style, thrift finds, and seasonal looks.",
        role: "Content Creator",
        platform: "Instagram & TikTok",
        tags: ["OOTD", "Fashion", "Lifestyle"],
        imageUrl: "./carousel/image6.png",
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
