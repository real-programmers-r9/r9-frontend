import Head from "next/head";

interface IHeadInfoProps {
  title: string;
  keywords: string;
  description: string;
}

const HeadInfo = ({ title, keywords, description }: IHeadInfoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
    </Head>
  );
};

export default HeadInfo;
