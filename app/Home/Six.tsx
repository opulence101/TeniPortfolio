import { useRef, useState } from 'react'

type Props = {}

const FaqsCard = (props: {
  faqsList: { q: string; a: string }
  idx: number
}) => {
  const answerElRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState(false)
  const [answerH, setAnswerH] = useState('0px')
  const { faqsList, idx } = props

  const handleOpenAnswer = () => {
    if (
      answerElRef.current &&
      answerElRef.current.firstChild instanceof HTMLElement
    ) {
      // Check if firstChild is an HTMLElement
      const answerElH = answerElRef.current.firstChild.offsetHeight // Access offsetHeight from firstChild
      setState(!state)
      setAnswerH(`${answerElH + 20}px`)
    }
  }

  return (
    <div
      className='space-y-3 mt-5 overflow-hidden border-b'
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className='cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium'>
        {faqsList.q}
        {state ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-gray-500 ml-2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M20 12H4'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-gray-500 ml-2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 4v16m8-8H4'
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className='duration-300 overflow-hidden' // Adjust the class to hide overflow
        style={{ height: state ? answerH : '0px' }} // Remove unnecessary curly braces
      >
        <div>
          <p className='text-gray-500'>{faqsList.a}</p>
        </div>
      </div>
    </div>
  )
}

const Six = (props: Props) => {
  const faqsList = [
    {
      q: 'What are some random questions to ask?',
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question."
    },
    {
      q: 'Do you include common questions?',
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator."
    },
    {
      q: 'Can I use this for 21 questions?',
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated."
    },
    {
      q: 'Are these questions for girls or for boys?',
      a: 'The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).'
    },
    {
      q: 'What do you wish you had more talent doing?',
      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires."
    }
  ]

  return (
    <section className='py-14'>
      <div className='max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8'>
        <div className='flex-1'>
          <div className='max-w-lg'>
            <h3 className='font-semibold text-indigo-600'>
              Frequently asked questions
            </h3>
            <p className='mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl'>
              All information you need to know
            </p>
          </div>
        </div>
        <div className='flex-1 mt-12 md:mt-0'>
          {faqsList.map((item, idx) => (
            <FaqsCard key={idx} idx={idx} faqsList={item} /> // Add key prop
          ))}
        </div>
      </div>
    </section>
  )
}

export default Six
