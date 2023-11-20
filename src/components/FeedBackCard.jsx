import { quotes } from "../assets/images"



const FeedBackCard = ({ content, name, title, img }) => {
  return (
    <div className='flex flex-col px-10 py-12 
    rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img
        src={quotes}
        className="w-[42px] h-[27px] "
      />
      <p className="font-normal font-poppins text-lg text-white py-10">{content}</p>
      <div className="flex flex-row gap-4">
        <img
          src={img}
          className='w-10 h-10'
        />
        <div>
          <h4 className="font-poppins text-xl text-white">
            {name}
          </h4>
          <p className="font-poppins text-lg text-white opacity-50">
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeedBackCard
