// eslint-disable-next-line no-unused-vars
export const WithRuBalance = (Component) => {
   return (props) => {
      const { balance } = props;
      const ruBalance = balance * 90;
      return <Component {...props} ruBalance={ruBalance} />;
   };
};
