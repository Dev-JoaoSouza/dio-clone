import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';
import { 
    CardContainer,
    ImageBox,
    Content,
    UserInfo,
    UserPicture,
    PostInfo,
    HasInfo
} from './styles';

const Card = ({image, autor, avatar, titulo, descricao, tags}) => {
  return (
    <CardContainer>
        <ImageBox img={image} />
        <Content>
            <UserInfo>
                <UserPicture src={avatar} />
                <div>
                    <h4>{autor}</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>{titulo}</h4>
                <p>{descricao}<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>{tags}</h4>
                <p>
                    <FiThumbsUp /> 16
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card };