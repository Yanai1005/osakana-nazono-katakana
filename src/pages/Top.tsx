import { Link } from 'react-router-dom'

export const Top = () => {
  return (
    <div>
      <div>Topコンポーネント</div>
      <Link
        to={{
          pathname: `/`,
        }}
        state={{
          getby: 'start',
        }}
      >
        Start
      </Link>
      {import.meta.env.VITE_DEBUG && (
        <div>
          <Link
            to={{
              pathname: `/`,
            }}
            state={{
              getby: '',
            }}
          >
            デバッグページ（本番では表示されません）
          </Link>
        </div>
      )}
    </div>
  )
}