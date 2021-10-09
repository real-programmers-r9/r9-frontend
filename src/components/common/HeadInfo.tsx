import Head from 'next/head';

interface HeadInfoProps {
  title: string;
  keywords: string;
  description: string;
}

const HeadInfo: React.FC<HeadInfoProps> = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
    </Head>
  );
};

export default HeadInfo;
