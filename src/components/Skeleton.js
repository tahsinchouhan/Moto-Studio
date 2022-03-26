const Skeleton = () => {
  return (
      <div className="skeleton-card">
          <div className="image-block skeleton"></div>            
          <div className="content-block">               
              <div className="skeleton skeleton-text mt-2"></div>
              <br />
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
          </div>
      </div>
  )
}

export default Skeleton