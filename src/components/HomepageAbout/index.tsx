import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<'svg'>>;
	description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		title: 'Easy to Use',
		Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		description: (
			<>
				AniKode Studio was designed from the ground up to be easily installed and
				used to create websites.
			</>
		),
	},
	{
		title: 'Focus on What Matters',
		Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		description: (
			<>
				Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
				ahead and move your docs into the <code>docs</code> directory.
			</>
		),
	},
	{
		title: 'Powered by React',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
				Extend or customize your website layout by reusing React. Docusaurus can
				be extended while reusing the same header and footer.
			</>
		),
	},
];

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageAbout(): JSX.Element {
	return (
		<>
			<section className={styles.features}>
				<div className="container">
					<div className="row">
						{FeatureList.map((props, idx) => (
							<Feature key={idx} {...props} />
						))}
					</div>
				</div>
			</section>

			<section className={clsx('hero hero--primary', styles.features)}>
				<div className="container">
					<div className="row">
						<div className={clsx('col col--6')}>
							<div className={clsx(styles.triggerText)}>
								<h3>Read the documentation?</h3>
							</div>
						</div>
						<div className={clsx('col col--6')}>
							<div className="text--center">
								<Link
									className="button button--secondary button--lg"
									to="https://notes-buddy.techwithanirudh.repl.co/">
									Get Started With AniKode Studio
								</Link>
							</div>
						</div>

					</div>
				</div>
			</section>
		</>
	);
}
