import PropTypes from 'prop-types';

function Card({ children, isFeatured, className }) {
  return (
    <div
      className={`card${isFeatured ? ' card--featured' : ''}${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
    </div>
  );
}

export { Card };

Card.propTypes = {
  children: PropTypes.node,
  isFeatured: PropTypes.bool,
  className: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  isFeatured: false,
  className: '',
};
