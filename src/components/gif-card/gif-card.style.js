import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {opacity: 0}
  100% {left: 1}
`;

export const GifImage = styled.img`
    outline: none;
    box-shadow: 0px 0px 10px gray;
    margin: 1rem 0;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease;
        transform: scale(1.04);
        box-shadow: 0px 0px 25px gray;
        position: relative;
        z-index: 2;
    }
`;

export const GifImageModal = styled(GifImage)`
    width: 80%;
    height: auto;
    max-width: 40rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    box-shadow: 0px 0px 4px gray;

    &:hover {
        transition: all 0.2s ease;
        transform: scale(1.01);
        box-shadow: 0px 0px 10px gray;
    }
`;

export const ContentCard = styled.div`
    position: fixed;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    color: gray;
    padding: 1.5rem;
    border: 1px solid gray;
    border-radius: 10px;
    outline: none;
    box-shadow: 0px 0px 2px gray;
    animation: ${fadeIn} 0.4s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .modal-top {
        display: flex;
        justify-content: space-between;
        height: 10%;
        margin-bottom: 1rem;

        .close-icon {
            cursor: pointer;
        }
    }

    .modal-content-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 2rem;

        .modal-content {
            text-align: center;

            h5 {
                margin-bottom: 1rem;
            }
        }

        .capitalize {
            text-transform: capitalize;
        }
    }
`;

export const Icon = styled.i`
    cursor: pointer;
    color: red;
    font-size: 30px;
    margin-top: -5px;
`;
