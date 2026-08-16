interface SectionHeadingProps {
  title: string;
  highlight: string;
  lede?: string;
}

/** `<h2>` with a gradient-highlighted word, plus an optional lede paragraph — both reveal on scroll. */
export function SectionHeading({ title, highlight, lede }: SectionHeadingProps) {
  return (
    <>
      <h2 className="sec-t" data-rv>
        {title} <span className="grad">{highlight}</span>
      </h2>
      {lede ? (
        <p className="sec-l" data-rv>
          {lede}
        </p>
      ) : null}
    </>
  );
}
