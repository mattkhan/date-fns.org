import { h, FunctionComponent } from 'preact'
import { MigratedDocTypedAttribute, Submodule } from '@date-fns/date-fns-db'
import { DocHeaderAnchor } from '~/ui/components/DocHeaderAnchor'
import { Markdown } from '~/ui/components/Markdown'

interface Props {
  exceptions: MigratedDocTypedAttribute[]
  selectedSubmodule: Submodule
  selectedVersion: string
}

export const Exceptions: FunctionComponent<Props> = ({
  exceptions,
  selectedSubmodule,
  selectedVersion,
}) => (
  <section>
    <h2 id="exceptions">
      Exceptions
      <DocHeaderAnchor anchor="exceptions" />
    </h2>

    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        {exceptions.map((exception, index) => (
          <tr key={index}>
            <td>{exception.type.names.join(' | ')}</td>
            <td>
              <Markdown
                value={exception.description}
                selectedSubmodule={selectedSubmodule}
                selectedVersion={selectedVersion}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
)
