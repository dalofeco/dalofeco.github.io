/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/layout.less';

interface LayoutProps {
  modal?: boolean;
  closeLink?: string;
  children: React.ReactNode;
}

const Layout = ({ modal = false, closeLink = '/', children }: LayoutProps) => {
  const history = useHistory();

  const backgroundClick = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if ((e.target as HTMLElement)?.id === 'LayoutContentContainer') {
        if (modal) history.push('/');
      }
    },
    [modal, history],
  );

  return (
    <>
      {modal ? (
        <div id="LayoutContentContainer" onClick={backgroundClick}>
          <div id="LayoutContentContainerModal">
            <div id="LayoutContentContainerCloseDiv">
              <button id="LayoutContentContainerModalCloseButton" type="button" onClick={() => history.push(closeLink)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            {children}
          </div>
        </div>
      ) : (
        <div id="LayoutContentContainer">{children}</div>
      )}

      <div id="LayoutBackground">
        <div id="LayoutBackgroundBlack" />
      </div>

      {/* <footer>
		© {new Date().getFullYear()} Dalofeco
	</footer> */}
    </>
  );
};

export default Layout;
