import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {
	// пиздец, написал ниже явно что !posts.length === 0 и оно сразу стало норм работать, ох уж этот тайпскрипт
	if (!posts.length === 0) {
		return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>;
	}
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>
			<TransitionGroup>
				{posts.map((post, index) => (
					<CSSTransition key={post.id} timeout={500} classNames='post'>
						<PostItem remove={remove} number={index + 1} post={post} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
};

export default PostList;