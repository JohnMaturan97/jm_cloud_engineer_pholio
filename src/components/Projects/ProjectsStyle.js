import styled from 'styled-components';
import _default from '../../themes/default';

export const LoadMoreButton = styled.button`
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.primary}; // Primary theme color for background
    color: white; // White text for contrast
    border: none;
    border-radius: 8px;
    font-size: clamp(14px, 2.5vw, 16px); // Dynamic scaling based on viewport width
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    width: 100%; // Full width on smaller screens
    max-width: 200px; // Maximum width to maintain button proportion on larger screens
    margin: 20px auto 0 auto; // Top margin increased, bottom margin set to 0

    &:hover {
        background-color: ${({ theme }) => theme.primary + 8}; // Lighten background on hover
        transform: translateY(-2px); // Slight raise effect on hover
    }

    &:active {
        transform: translateY(1px); // Depress effect when clicked
    }

    @media (max-width: 768px) {
        padding: 8px 16px;
        font-size: 14px; // Smaller font size for smaller screens
        margin: 16px auto 0 auto; // Adjusted top margin for smaller screens, bottom margin still 0
    }
`;

export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 20px 70px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: justify;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    margin: 20px auto 5px auto;
    padding: 0 20px;
    line-height: 1.6;

    @media (max-width: 768px) {
        font-size: 16px;
        margin: 20px 10px 5px 10px;
        padding: 0 15px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    @media (min-width: 960px) {
        display: flex;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 32px;
    }
`;