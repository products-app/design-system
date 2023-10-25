import '../styles/common.css'

interface CommonGridProps {
  config: Record<string, string>
  hasRemValue?: boolean
}

export function CommonGrid({ config, hasRemValue = false }: CommonGridProps) {
  return (
    <table className="common-grid">
      <thead>
        <th>Name</th>
        <th>Value</th>
        {hasRemValue && <th>Pixels</th>}
      </thead>
      <tbody>
        {Object.entries(config).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
