const Title = ({ title, description }) => {
  return (
    <div className='text-center mt-6 text-gray-900 mb-10'>
        <h2 className='text-3xl sm:text-4xl font-medium'>{title}</h2>
        <p className='max-w-2xl mt-4 text-gray-600'>{description}</p>
    </div>
  )
}

export default Title