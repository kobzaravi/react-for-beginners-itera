type FooterProps = {
  copyright: string;
};
export const Footer: React.FC<FooterProps> = (props) => (
  <footer>footer{props.copyright}</footer>
);
