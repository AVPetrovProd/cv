import { FC } from 'react';

import { IconedRecord, PageHeader, TitledBlock } from '~components/atoms';
import { LangCard } from '~components/molecules';
import { CONTACTS, LANGUAGES, POSITION } from '~src/constants';
import { IWithChildren } from '~src/types';
import { getExperiencePeriod } from '~src/utils';

import './overview.scss';

interface OverviewBlockProps extends IWithChildren {}

const OverviewBlock: FC<OverviewBlockProps> = ({ children }) => (
  <div className="overview__block">
    {children}
  </div>
);

export const Overview: FC = () => (
  <>
    <PageHeader title={POSITION} subtitle={getExperiencePeriod()} />
    <div className="overview">
      <div className="overview__main">
        <TitledBlock title="Main stack:">
          <OverviewBlock>
            <IconedRecord iconSrc="/tech/typescript.png" text="TypeScript" bold />
            <IconedRecord iconSrc="/tech/react.png" text="React.js" bold />
            <IconedRecord iconSrc="/tech/redux.png" text="Redux.js" bold />
            <IconedRecord iconSrc="/tech/next.png" text="Next.js" bold />
            <IconedRecord iconSrc="/tech/node.png" text="Node.js" bold />
          </OverviewBlock>
        </TitledBlock>
        <TitledBlock title="Languages:">
          <OverviewBlock>
            {LANGUAGES.map(props => (
              <LangCard key={props.lang} {...props} />
            ))}
          </OverviewBlock>
        </TitledBlock>
        <TitledBlock title="Contacts:">
          <OverviewBlock>
            {CONTACTS.map(props => (
              <IconedRecord key={props.text} {...props} />
            ))}
          </OverviewBlock>
        </TitledBlock>
      </div>
    </div>
  </>
);
