import type SVGProps from './SVGProps';

export default function Chevron({ width = 16, fillColor = '#ffffff' }: Pick<SVGProps, 'width' | 'fillColor'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={width} viewBox="0 0 16 16" fill={fillColor}>
      <path
        fill-rule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
}
