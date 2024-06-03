import { Container } from "../../common/common.jsx";

export const ResponsiveBottomMenu = () => {
  return  (
    <Container>
      <div className={'sm:fixed sm:bottom-0 sm:w-full sm:border'}>
        bottom
      </div>
    </Container>
  )
}

export const ResponsiveTopMenu = () => {
  return (
    <div>
      top
    </div>
  )
}