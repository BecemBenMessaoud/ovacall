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
`;

export const MainContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
`;

export const LogoContainer = styled.div`
  img {
    height: 40px;
    width: auto;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
  }
`;

export const LinksRow = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px 30px;
  }
`;

export const SettingsWrapper = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  margin-left: auto;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 15px;
    width: 100%;
    justify-content: flex-start;
  }
`;

export const FlagIcon = styled.img`
  width: 20px;
  height: auto;
  margin-right: 8px;
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
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #e1e1e1;
  font-size: 12px;
  color: #999;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
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
`;
// ... (keep all previous styled components)



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