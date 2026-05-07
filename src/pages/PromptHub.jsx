import styles from './PromptHub.module.css';

const features = [
  {
    image: '/assets/images/prompthub/homepage.png',
    title: 'Home Page',
    description:
      'This is the home page where you can see your prompts. All of these cards are interactable components that you can click on or hover over. You can search by title or content, and filter with various options.',
  },
  {
    image: '/assets/images/prompthub/createprompt.png',
    title: 'Create Prompt',
    description:
      'With the application, the user has the ability to work entirely in Prompt Hub, or in LibreChat (more on that later). On this page, users can create a prompt to give to an LLM with various settings.',
  },
  {
    image: '/assets/images/prompthub/editprompt.png',
    title: 'Edit Prompt',
    description:
      'This page has very similar functionality to Create, except this will update an existing prompt. Additionally, this creates a new version of the prompt for proper version control (more on that later).',
  },
  {
    image: '/assets/images/prompthub/versioncontrol.png',
    title: 'Version Control',
    description:
      'This page allows users to control the various versions of their prompt. Here, they can view diffs (changes) or revert to previous states. Think GitHub — but for prompts!',
  },
  {
    image: '/assets/images/prompthub/sharing.png',
    title: 'Sharing',
    description:
      'This is a feature that sets us apart and encourages collaboration: sharing. This feature allows users to share prompts and their information (responses, versions, etc). No more copy and pasting! Users can also "branch" a prompt to start their own history.',
  },
  {
    image: '/assets/images/prompthub/responses.png',
    title: 'Response Tracking',
    description:
      'The application can automatically track responses for a prompt that is inserted. The response is also formatted into markdown for visual consistency.',
  },
  {
    image: '/assets/images/prompthub/librechat.png',
    title: 'LibreChat Integration',
    description:
      'This is ideally where the user spends most of their time talking to LLMs. Here the user can export to Prompt Hub to store, share, and manage valuable information.',
  },
];

export default function PromptHub() {
  return (
    <div className={styles.promptHub}>
      <section className={`${styles.hero} gradient-bg`}>
        <div className={styles.heroContent}>
          <h1>Prompt Hub</h1>
          <p className={styles.tagline}>Internal LLM Prompt Management</p>
          <p className={styles.description}>
            An internal application built for Paychex employees to manage, version, and share their
            LLM prompts all in one place. Designed to be intuitive for everyone while being
            powerful enough for advanced users. Integrates seamlessly with LibreChat for users to work there, in Prompt Hub, or both!
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className={styles.showcase}>
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`${styles.feature} ${index % 2 === 1 ? styles.reversed : ''}`}
              >
                <div className={styles.imageWrapper}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={styles.screenshot}
                  />
                </div>
                <div className={styles.featureText}>
                  <h2>{feature.title}</h2>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
