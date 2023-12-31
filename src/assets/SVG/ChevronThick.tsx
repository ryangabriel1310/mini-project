import type SVGProps from './SVGProps';

export default function ChevronThick({
  width = 16,
  fillColor = '#ffffff',
  className,
}: Pick<SVGProps, 'width' | 'fillColor' | 'className'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 14 14"
      fill={fillColor}
      className={className}
      role="img"
      focusable="false"
      aria-hidden="true"
    >
      <path d="m 12.85856,5.194785 -5.52357,5.51613 Q 7.19355,10.852355 7,10.852355 q -0.19355,0 -0.33499,-0.14144 L 1.141439,5.194785 Q 1,5.053345 1,4.856075 1,4.658805 1.141439,4.517365 L 2.37717,3.289075 q 0.14144,-0.14143 0.33499,-0.14143 0.19355,0 0.33499,0.14143 L 7,7.241935 10.95285,3.289075 q 0.14144,-0.14143 0.33499,-0.14143 0.19355,0 0.33499,0.14143 l 1.23573,1.22829 Q 13,4.658805 13,4.856075 q 0,0.19727 -0.14144,0.33871 z" />
    </svg>
  );
}
