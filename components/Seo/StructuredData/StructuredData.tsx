interface IJsonLD {
  [key: string]: any;
}

interface LDJsonProps {
  jsonLd: IJsonLD;
}

export const jsonLdToString = (jsonLD: IJsonLD) => {
  return {
    __html: JSON.stringify(jsonLD),
  };
};

export default function StructuredData({ jsonLd }: LDJsonProps) {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={jsonLdToString(jsonLd)}
        key='product-jsonld'
      />
    </>
  );
}
