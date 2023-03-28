import spinner from '../assets/spinner.svg';

const Spinner = () => {
  return (
    <div className="bg-gray bg-opacity-25 flex items-center justify-center fixed inset-0 ">
      <div>
        <img src={spinner} aalt="loading..." className="h-24" />
      </div>
    </div>
  );
};

export default Spinner;
