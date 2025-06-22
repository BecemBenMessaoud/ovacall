import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 40px 20px 20px;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  gap: 40px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export const LogoContainer = styled.div`
  img {
    height: 40px;
    width: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
  }
`;

export const LinksRow = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

export const SettingsWrapper = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

export const LanguageAndDarkModeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (min-width: 769px) {
    margin-left: 40px; /* ✅ Décalé un peu à droite sur PC */
  }

  @media (max-width: 768px) {
    flex-direction: column; /* ✅ Empilé sur mobile */
    gap: 15px;
    align-items: center;
    margin-left: 0;
  }
`;

export const SettingOption = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
  cursor: pointer;

  &:hover {
    color: #333;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FooterLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
  white-space: nowrap;

  &:hover {
    color: #333;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #e1e1e1;
  font-size: 12px;
  color: #999;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    text-align: center;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const SocialIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

export const FlagIcon = styled.img`
  width: 20px;
  height: auto;
  margin-right: 8px;
`;
