import { getJsonLdString } from './getJsonLdString';

interface LDJsonProps {
  ldjson: {
    [key: string]: any;
  };
}

export default function StructuredData({ ldjson }: LDJsonProps) {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={getJsonLdString(ldjson)}
        key='product-jsonld'
      />
    </>
  );
}
