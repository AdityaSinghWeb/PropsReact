function Tab({children, button, ButtonContainer}) {
  return (
    <>
       <ButtonContainer>{button}</ButtonContainer>
      {children}
    </>
  )
}

export default Tab
