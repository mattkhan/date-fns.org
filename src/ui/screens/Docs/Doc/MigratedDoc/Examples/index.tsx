import { h, FunctionComponent } from 'preact'
import { Code } from '~/ui/components/Code'
import { DocHeaderAnchor } from '~/ui/components/DocHeaderAnchor'
import { CodeContainer } from './style.css'
import isArray from 'lodash/isArray'
import { Submodule } from '@date-fns/date-fns-db'
import { Markdown } from '~/ui/components/Markdown'

interface Props {
  examples: string[] | string
  selectedSubmodule: Submodule
  selectedVersion: string
}

export const Examples: FunctionComponent<Props> = ({
  examples,
  selectedSubmodule,
  selectedVersion,
}) => (
  <section>
    <h2 id="examples">
      Examples
      <DocHeaderAnchor anchor="examples" />
    </h2>

    {isArray(examples) ? (
      examples.map((example, index) => {
        return (
          <CodeContainer key={index}>
            <Code
              value={example}
              options={{
                readOnly: true,
                mode: 'javascript',
              }}
            />
          </CodeContainer>
        )
      })
    ) : (
      <Markdown
        value={examples}
        selectedSubmodule={selectedSubmodule}
        selectedVersion={selectedVersion}
      />
    )}
  </section>
)
