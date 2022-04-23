import React, {useState} from 'react';
import cn from 'classnames';
import {useMutation} from '@apollo/client';

import {
    User,
    FOLLOW_GITHUB_USER,
    UNFOLLOW_GITHUB_USER,
} from '@requests';
import {IconLink} from '@ui-kit';
import FollowersIcon from '@images/followers.svg'
import CompanyIcon from '@images/company.svg'
import EmailIcon from '@images/email.svg'
import TwitterIcon from '@images/twitter.svg'

import './style.scss';

type Props = Omit<User, 'repositories'> & {
    refetchUserInfo: () => void;
}

const TIMEOUT_AFTER_MUTATE = 3000;

export const UserInfo = ({
    avatarUrl,
    company,
    email,
    followers: {totalCount: followersTotalCount},
    following: {totalCount: followingTotalCount},
    id,
    login,
    name,
    refetchUserInfo,
    twitterUsername,
    viewerIsFollowing,
}: Props) => {
    const [loading, setLoading] = useState<boolean>(false);

    const [
        followGithubUser, {
            error: followError,
            loading: followLoading,
        }
    ] = useMutation(FOLLOW_GITHUB_USER, {
        variables: {repositoryId: id},
        onCompleted: () => {
            setTimeout(() => {
                refetchUserInfo();
                setLoading(false)
            }, TIMEOUT_AFTER_MUTATE)
        },
        onError: () => {
            setLoading(false)
        },
        ignoreResults: true,
    });

    const [
        unfollowGithubUser, {
            error: unfollowError,
            loading: unfollowLoading,
        }
    ] = useMutation(UNFOLLOW_GITHUB_USER, {
        variables: {repositoryId: id},
        onCompleted: () => {
            setTimeout(() => {
                refetchUserInfo();
                setLoading(false)
            }, TIMEOUT_AFTER_MUTATE)
        },
        onError: () => {
            setLoading(false)
        },
        ignoreResults: true,
    });

    const onFollowButtonClick = () => {
        if (viewerIsFollowing) {
            setLoading(true);
            unfollowGithubUser();
        }
        else {
            setLoading(true);
            followGithubUser();
        }
    };

    const getFollowButtonText = () => {
        if (loading) {
            return 'Loading...';
        }

        if (followError || unfollowError) {
            return 'Please try again later';
        }

        return viewerIsFollowing ? 'Unfollow' : 'Follow';
    };

    return (
        <div className={cn('user-info')}>
            <div className={cn('user-info__avatar')}>
                <img src={avatarUrl} alt={`${login}'s avatar`}/>
            </div>
            <div className={cn('user-info__name')}>
                {name}
            </div>
            <div className={cn('user-info__login')}>
                {login}
            </div>
            {loading ? 'Please wait...' : (
                <>
                    <div className={cn('user-info__follow-button')}>
                        <button
                            onClick={onFollowButtonClick}
                            disabled={followLoading || unfollowLoading || loading}
                        >
                            {getFollowButtonText()}
                        </button>
                    </div>
                    <div className={cn('user-info__follow-info')}>
                        <IconLink
                            href={`https://github.com/${login}?tab=followers`}
                            iconSrc={FollowersIcon}
                            text={` ${followersTotalCount} followers`}
                        />
                        &nbsp;·&nbsp;
                        <IconLink
                            href={`https://github.com/${login}?tab=following`}
                            text={` ${followingTotalCount} following`}
                        />
                    </div>
                </>
            )}
            <div className={cn('user-info__contacts')}>
                {company && (
                    <IconLink
                        href={`https://github.com/${company.slice(1)}`}
                        iconSrc={CompanyIcon}
                        text={company}
                    />
                )}
                {email && (
                    <IconLink
                        href={`mailto:${email}`}
                        iconSrc={EmailIcon}
                        text={email}
                    />
                )}
                {twitterUsername && (
                    <IconLink
                        href={`https://twitter.com/${twitterUsername}`}
                        iconSrc={TwitterIcon}
                        text={`@${twitterUsername}`}
                    />
                )}
            </div>
        </div>
    );
};

